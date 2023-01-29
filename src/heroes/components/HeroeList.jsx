import { getHeroesByPublisher } from "./../helpers/getHeroesByPublisher";
import { HeroeCard } from "./HeroeCard";
import { useMemo } from 'react';

export const HeroeList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) ;

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroeCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
