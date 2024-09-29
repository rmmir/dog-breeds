import { useQuery } from 'react-query';

import { Header } from './Header';
import { DogBreedCard } from './DogBreedCard';
import { DogBreedData } from '../models/DogBreedModel';

export const DogBreeds: React.FC = () => {
    const { isLoading, error, data } = useQuery<DogBreedData[], Error>(
        'dogBreeds',
        () =>
            fetch('https://api.thedogapi.com/v1/breeds').then((res) =>
                res.json()
            )
    );

    if (isLoading) return 'Loading...';

    if (!data || error) return 'Error loading the dog breeds data: ' + error?.message;

    return (
        <>
            <Header breedCount={data.length}/>
            {data?.map((breed: DogBreedData) => (
                <DogBreedCard key={breed.id} breed={breed} />
            ))}
        </>
    );
};
