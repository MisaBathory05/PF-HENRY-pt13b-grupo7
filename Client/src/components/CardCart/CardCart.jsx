import React from "react";

const CardCart = ({ product }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={product.primaryimage}
            className="img-fluid rounded-start"
            alt={product.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">
              <small className="text-muted">
                Price: ${product.price} - {/* Mostrar el precio */}
                Quantity: {product.quantity ? product.quantity : 1} -{" "}
                {/* Mostrar la cantidad (o 1 si no está definida) */}
                Total: $
                {product.price * (product.quantity ? product.quantity : 1)}{" "}
                {/* Calcular y mostrar el total */}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
