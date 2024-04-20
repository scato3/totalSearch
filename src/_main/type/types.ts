export interface IDataProps {
  name: string;
  price: string;
  tag: string;
  time: number;
  link: string;
  location: string;
  image: string;
}

export interface ISearchProps {
  onSearch: (searchValue: string) => void;
}
