import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { getUserProductWishlist } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistfromDb();
  }, []);
  const getWishlistfromDb = () => {
    dispatch(getUserProductWishlist());
  };

  const wishlistState = useSelector((state) => state.auth.wishlist.wishlist); 

  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {
            wishlistState?.map((item, index) => {
              return (
                <div className="col-3" key={index}>
                <div className="wishlist-card position-relative">
                  <img
                    src="images/cross.svg"
                    alt="cross"
                    className="position-absolute cross img-fluid"
                  />
                  <div className="wishlist-card-image">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid w-100"
                      alt="watch"
                    />
                  </div>
                  <div className="py-3 px-3">
                    <h5 className="title">
                      {item?.title}
                    </h5>
                    <h6 className="price">$ {item?.price}</h6>
                  </div>
                </div>
                </div>

              )
            })
          }
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
