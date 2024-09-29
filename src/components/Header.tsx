type HeaderProps = {
    breedCount: number;
};

export const Header: React.FC<HeaderProps> = ({ breedCount }) => {
    return <div className="flex gap-2 text-2xl mb-20 font-semibold">
        Breeds
        <p className="text-gray-400">{breedCount}</p>
    </div>;
};
