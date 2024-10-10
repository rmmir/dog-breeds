import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateDogBreed } from '../api/useDogBreedsApi';

type FormFields = {
    metric_weight: string;
    imperial_weight: string;
    name: string;
    temperament: string;
    origin: string;
    life_span: string;
    reference_image_id: string;
}

const AddDogBreed: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>();
    const { mutate: createBreed } = useCreateDogBreed();

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        createBreed(data, {
            onSuccess: (data) => {
                alert(`Dog breed created successfully: ${data}`);
            },
            onError: (error) => {
                alert(`Error creating dog breed: ${error}`);
            }
          });
    }

    return (
        <form 
        className="flex flex-col gap-4 p-6 bg-gray-200 rounded-lg w-full max-w-md mx-auto" 
        onSubmit={handleSubmit(onSubmit)}
        >
            <input 
                {...register('metric_weight', {
                required: "Metric Weight is required",
                minLength: { value: 2, message: "Minimum length is 2" }
                })} 
                type="text" 
                placeholder="Metric Weight" 
                className="p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.metric_weight && <div className="text-red-500">{errors.metric_weight.message}</div>}

            <input 
                {...register('imperial_weight', {
                required: "Imperial Weight is required",
                minLength: { value: 2, message: "Minimum length is 2" }
                })} 
                type="text" 
                placeholder="Imperial Weight" 
                className="p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.imperial_weight && <div className="text-red-500">{errors.imperial_weight.message}</div>}

            <input 
                {...register('name', {
                required: "Name is required",
                minLength: { value: 2, message: "Minimum length is 2" }
                })} 
                type="text" 
                placeholder="Name" 
                className="p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.name && <div className="text-red-500">{errors.name.message}</div>}

            <input 
                {...register('temperament', {
                required: "Temperament is required",
                minLength: { value: 2, message: "Minimum length is 2" }
                })} 
                type="text" 
                placeholder="Temperament" 
                className="p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.temperament && <div className="text-red-500">{errors.temperament.message}</div>}

            <input 
                {...register('origin', {
                required: "Origin is required",
                minLength: { value: 2, message: "Minimum length is 2" }
                })} 
                type="text" 
                placeholder="Origin" 
                className="p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.origin && <div className="text-red-500">{errors.origin.message}</div>}

            <input 
                {...register('life_span', {
                required: "Life Span is required",
                minLength: { value: 2, message: "Minimum length is 2" }
                })} 
                type="text" 
                placeholder="Life Span" 
                className="p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.life_span && <div className="text-red-500">{errors.life_span.message}</div>}

            <input 
                {...register('reference_image_id', {
                required: "Reference Image ID is required",
                minLength: { value: 2, message: "Minimum length is 2" }
                })} 
                type="text" 
                placeholder="Ref Image Id" 
                className="p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.reference_image_id && <div className="text-red-500">{errors.reference_image_id.message}</div>}

            <button 
                type="submit" 
                className="p-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
                Create
            </button>
        </form>
    );
}

export default AddDogBreed;