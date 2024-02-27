import { Actor, Genre, Serie, Platform, Crew } from "@/types/series";
import { ManagedTransaction } from "neo4j-driver";
import neo4j from "neo4j-driver";

const SELECT_MOVIE_DETAILS = `
  OPTIONAL MATCH (a:Person)-[r:ACTED_IN]->(serie)
  OPTIONAL MATCH (c:Person)-[cr:CREW_IN]->(serie)
  OPTIONAL MATCH (serie)-[:IS_GENRE]->(g:Genre)
  OPTIONAL MATCH (serie)<-[:VIDEO_OF]-(v:Trailer)
  OPTIONAL MATCH (serie)-[:SPOKEN]->(l:Language)
  OPTIONAL MATCH (serie)<-[:PLATFORM_OF]-(p:Platform)
  RETURN serie,
    COLLECT(v) AS videos,
    COLLECT(DISTINCT {
      id: a.id_person, 
      name: a.name, 
      character: r.character, 
      order: r.order,
      image: a.profile_path
  }) AS actors, 
  COLLECT(DISTINCT {
    id: c.id_person, 
    name: c.name, 
    role: cr.role
  }) AS crew, 
  COLLECT({id: g.id, name: g.name}) AS genres,
  COLLECT({id: l.id, name: l.name}) AS languages,
  COLLECT({id: p.id, name: p.name, logo_url: p.logo_path}) AS platforms
`;

const notRepeatByID = (arr: any[]) => {
  // @ts-ignore
  const _new_arr = [...new Set(arr.map((g) => g.id))].map((g) =>
    arr.find((gg) => gg.id == g)
  );
  return _new_arr;
};

type Response = {
  serie: Serie;
  actors: Actor[];
  crew: Crew[];
  genres: Genre[];
  videos: any[];
  platforms: Platform[];
  languages: any[];
};

const formatSerie = (object: any): Response => {
  return {
    serie: object.serie.properties,
    actors: notRepeatByID(object.actors.filter((r: any) => r.id)).sort(
      (a, b) => {
        return a.order - b.order;
      }
    ),
    crew: notRepeatByID(object.creew.filter((r: any) => r.id)),
    genres: notRepeatByID(object.genres.filter((r: any) => r.id)),
    languages: notRepeatByID(object.languages.filter((r: any) => r.id)),
    platforms: notRepeatByID(object.platforms.filter((r: any) => r.id)),
    videos: notRepeatByID(object.videos.map((r: any) => r.properties)),
  };
};

export const getSerieBySlug = async (slug: string): Promise<Response> => {
  const driver = neo4j.driver(
    `${process.env.DATABASE_SCHEME}://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}`,
    neo4j.auth.basic(
      process.env.DATABASE_USERNAME || "",
      process.env.DATABASE_PASSWORD || ""
    ),
    { disableLosslessIntegers: true }
  );
  const session = driver.session({
    database: process.env.DATABASE_NAME || "neo4j",
    defaultAccessMode: "READ",
  });

  const SQL = `
    MATCH (serie:Serie { slug: $slug })
    ${SELECT_MOVIE_DETAILS}
  `;
  const result_query = await session.executeWrite((tx: ManagedTransaction) =>
    tx.run(SQL, {
      slug,
    })
  );
  const results = result_query.records.map((r) => formatSerie(r.toObject()));
  return results[0];
};
