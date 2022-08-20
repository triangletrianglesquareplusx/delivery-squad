export default function LifeHacksItem(props) {
  return (
    <div className="flex justify-center items-center pr-40 rounded-2xl my-8 mx-auto w-fit shadow-lg">
      <div className="p-5 pr-16 font-bold text-white rounded-l-2xl text-4xl bg-grad">
        <p className="m-0">{props.item.number}</p>
      </div>
      <div className="text-left">
        <h3 className="m-0 font-bold">{props.item.title}</h3>
        <p className="m-0">{props.item.description}</p>
      </div>
    </div>
  );
}
