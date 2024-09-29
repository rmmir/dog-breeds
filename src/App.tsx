import { QueryClient, QueryClientProvider } from 'react-query';

import { DogBreeds } from './components/DogBreeds';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <DogBreeds />
        </QueryClientProvider>
    );
}

export default App;
