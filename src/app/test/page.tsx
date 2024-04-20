import { useFavoritesStore } from "@/hooks/useGlobalStore";

// 즐겨찾기 목록을 보여주는 컴포넌트
export default function FavoritesList() {
  const favoritesStore = useFavoritesStore.getState(); // 즐겨찾기 상태 가져오기
  const { favorites } = favoritesStore;
  console.log(favorites);

  return (
    <div>
      <h2>즐겨찾기 목록</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            <a href={favorite.link}>{favorite.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
