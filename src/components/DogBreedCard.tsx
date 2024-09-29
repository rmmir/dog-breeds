import { DogBreedData } from '../models/DogBreedModel';

type DogBreedProps = { breed: DogBreedData };

export const DogBreedCard: React.FC<DogBreedProps> = ({ breed }) => {
    return (
        <div className='bg-white w-[336px] border-2 border-gray rounded-xl'>
                <img
                    className='rounded-t-xl w-[336px] h-[253px]'
                    src={`https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`}
                    alt={breed.name}
                />
            <div className='flex flex-col gap-4 p-5'>
                <div>
                    <p className='font-semibold text-gray-700'>Weight</p>
                    <p>{breed.weight.metric}</p>
                </div>
                <div>
                    <p className='font-semibold text-gray-700'>Breed</p>
                    <p>{breed.name}</p>
                </div>
                <div>
                    <p className='font-semibold text-gray-700'>Temperament</p>
                    <p>{breed.temperament}</p>
                </div>
                <div>
                    <p className='font-semibold text-gray-700'>Origin</p>
                    <p>{breed.origin}</p>
                </div>
                <div>
                    <p className='font-semibold text-gray-700'>Life Span</p>
                    <p>{breed.life_span}</p>
                </div>
            </div>
        </div>
    );
};
