import { getMovieBySlug } from "@/utils/neo4j";
import { ManagedTransaction } from "neo4j-driver";
import neo4j from "neo4j-driver";

const SELECT_MOVIE_DETAILS = `
  OPTIONAL MATCH (a:Person)-[r:ACTED_IN]->(movie)
  OPTIONAL MATCH (movie)-[:IS_GENRE]->(g:Genre)
  OPTIONAL MATCH (movie)<-[:VIDEO_OF]-(v:Trailer)
  OPTIONAL MATCH (movie)-[:SPOKEN]->(l:Language)
  OPTIONAL MATCH (movie)<-[:PLATFORM_OF]-(p:Platform)
  RETURN movie,
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

const formatMovie = (object: any) => {
  return {
    movie: object.movie.properties,
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
  const results = await getMovieBySlug(slug);
  res.send(results);
};

export default GET;
