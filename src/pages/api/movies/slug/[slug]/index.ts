import { getSerieBySlug } from "@/utils/neo4j";
import { ManagedTransaction } from "neo4j-driver";
import neo4j from "neo4j-driver";

const SELECT_MOVIE_DETAILS = `
  OPTIONAL MATCH (a:Person)-[r:ACTED_IN]->(serie)
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

const formatSerie = (object: any) => {
  return {
    serie: object.serie.properties,
    actors: notRepeatByID(object.actors.filter((r: any) => r.id)).sort(
      (a, b) => {
        return a.order - b.order;
      }
    ),
    genres: notRepeatByID(object.genres.filter((r: any) => r.id)),
    languages: notRepeatByID(object.languages.filter((r: any) => r.id)),
    platforms: notRepeatByID(object.platforms.filter((r: any) => r.id)),
    videos: notRepeatByID(object.videos.map((r: any) => r.properties)),
  };
};

const GET = async (req: any, res: any) => {
  const slug = req.query.slug;
  const results = await getSerieBySlug(slug);
  res.send(results);
};

export default GET;
