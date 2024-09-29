import { DogBreedData } from '../models/DogBreedModel';

type DogBreedProps = { breed: DogBreedData };

export const DogBreedCard: React.FC<DogBreedProps> = ({ breed }) => {
    return (
        <>
            <img
                src={`https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`}
                alt={breed.name}
                style={{ width: '336px', height: '252px' }}
            />
            <div>
                <div>
                    <p>Weight</p>
                    <p>{breed.weight.metric}</p>
                </div>
                <div>
                    <p>Breed</p>
                    <p>{breed.name}</p>
                </div>
                <div>
                    <p>Temperament</p>
                    <p>{breed.temperament}</p>
                </div>
                <div>
                    <p>Origin</p>
                    <p>{breed.origin}</p>
                </div>
                <div>
                    <p>Live Span</p>
                    <p>{breed.life_span}</p>
                </div>
            </div>
        </>
    );
};
