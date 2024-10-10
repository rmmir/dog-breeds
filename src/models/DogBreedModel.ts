export type DogBreedData = {
    dogBreeds: DogBreed[];
};

export type DogBreed = {
    id: string;
    metric_weight: string;
    imperial_weight: string;
    name: string;
    temperament: string;
    origin: string;
    life_span: string;
    reference_image_id: string;
}

export type DogBreedCreate = {
    metric_weight: string;
    imperial_weight: string;
    name: string;
    temperament: string;
    origin: string;
    life_span: string;
    reference_image_id: string;
}
