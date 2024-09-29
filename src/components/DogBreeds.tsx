import { useQuery } from 'react-query';

import { DogBreedData } from '../models/DogBreedModel';
import { DogBreedCard } from './DogBreedCard';
import { Header } from './Header';

export const DogBreeds: React.FC = () => {
    const { isLoading, error, data } = useQuery<DogBreedData[], Error>(
        'dogBreeds',
        () =>
            fetch('https://api.thedogapi.com/v1/breeds').then((res) =>
                res.json()
            )
    );

    if (isLoading) return 'Loading...';

    if (!data || error)
        return 'Error loading the dog breeds data: ' + error?.message;

    return (
        <div className="bg-gray-100 p-5">
            <Header breedCount={data.length} />
            <div className='flex flex-wrap gap-3'>
                {data?.map((breed: DogBreedData) => (
                    <DogBreedCard key={breed.id} breed={breed} />
                ))}
            </div>
        </div>
    );
};
