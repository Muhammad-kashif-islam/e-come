import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/ItemSlice";
import { fetchActions } from "../store/FetchStatus";
export default function FetchItems() {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.fetchStatus);
  // console.log(status);
  useEffect(() => {
    if (status.fetchDone == true) {
      return;
    }

    const fetchItems = async () => {
      try {
        const items = await fetch("http://localhost:8080/items");
        const data = await items.json();
        dispatch(fetchActions.fetchDone());
        dispatch(itemsActions.addItem(data));
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchItems();
  }, [status]);
  return <></>;
}
