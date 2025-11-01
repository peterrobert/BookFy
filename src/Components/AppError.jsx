const AppError = ({ name }) => {
  return (
    <p className="text-red-500">Sorry, there was an error loading {name}.</p>
  );
};

export default AppError;
