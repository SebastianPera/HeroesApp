import { Link } from "react-router-dom";
import 'animate.css'

const CharacterByHero = ({ alter_ego, characters }) => {
  if (alter_ego === characters) return <></>;

  return <p>{characters}</p>;
};

export const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  // const charactersByHero = <p>{ characters }</p>;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row g-0">
          <div className="col-4">
            <img src={heroImageUrl} alt={superhero} className="card-img " />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title"> {superhero}</h5>
              <p className="card-text"> {alter_ego}</p>

              <CharacterByHero characters={ characters } alter_ego={ alter_ego }/>

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>Más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
