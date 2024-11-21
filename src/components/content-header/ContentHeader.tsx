const ContentHeader = ({ title, children }: { title: string, children?: any }) => {
  return (
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-12">
            <div style={{ display: "flex" }}>
              <h1 style={{ flex: 1 }} className="card-shadow">{title}</h1>
              <div >
                {children}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentHeader;