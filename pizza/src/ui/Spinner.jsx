function Spinner() {
  return (
    <div className="bg-blur absolute inset-0 flex items-center justify-center bg-slate-200/50 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}

export default Spinner;
