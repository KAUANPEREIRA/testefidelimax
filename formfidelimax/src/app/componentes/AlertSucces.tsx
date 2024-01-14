export const AlertSucces = () => {
  return (
    <div className="flex justify-between text-green-200 shadow-inner rounded p-3 bg-green-600">
      <p className="self-center">
        <strong>Success</strong> This is Succes alert
      </p>
      <strong className="text-xl lighn-center cursor-pointer alert-del">
        &times;
      </strong>
    </div>
  );
};
