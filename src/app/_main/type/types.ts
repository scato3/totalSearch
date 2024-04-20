export interface IDataProps {
  name: string;
  price: string;
  tag: string;
  time: string;
  link: string;
  region: string;
  img: string;
  id: string;
}

export interface ISearchProps {
  onSearch: (searchValue: string) => void;
}

export interface ICardProps {
  item: {
    name: string;
    link: string;
    img: string;
    region: string;
    price: string;
    time: string;
    tag: string;
    id: string;
  };
}
