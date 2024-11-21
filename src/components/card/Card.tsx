const Card = ({ children }: { children: any }) => {
  return (
    <div className="card card-shadow">
      {children}
    </div>
  );
};

export default Card;