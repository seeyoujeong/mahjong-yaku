interface Album {
  userId: number;
  id: number;
  title: string;
}

export default async function AlbumList() {
  const data = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums = (await data.json()) as Album[];

  return (
    <div>
      {albums.map((album) => (
        <div key={album.id}>{album.title}</div>
      ))}
    </div>
  );
}
