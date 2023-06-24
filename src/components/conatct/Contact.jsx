import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../loading/Loading";
import Navbar from "../navbar/Navbar";

/**
 * contact Component
 *
 * The page component fetches user data from an API and displays a button to load more data.
 */

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  /**
   * useEffect Hook
   *
   * Fetches user data when the component mounts or uPage state changes.
   */
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const {
        data: { results },
      } = await axios(
        `https://randomuser.me/api/?page=${page}&results=4&inc=name,picture,phone`
      );

      setContacts((prev) => [...prev, ...results]);
      setLoading(false);
    };

    fetchData();
    return () => {};
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(contacts);
  return (
    <div>
      <div className=" fixed w-[100%]"> <Navbar /></div>
      <div className="md:pl-[20%] md:pr-[20%] pt-20">
        {contacts.map((conatct, i) => (
          <div
            className=" flex  m-3 justify-around items-center shadow-md bg-slate-100 rounded-lg p-1"
            key={i}
          >
            <div className="flex text-lg flex-col">
              <p>
                Name: {conatct.name.title}.{conatct.name.first}
              </p>
              <p>Phone: {conatct.phone}</p>
            </div>
            <img
              className=" w-[80px] rounded-full"
              src={conatct.picture.large}
              alt="avatar"
            />
          </div>
        ))}
        <div className="flex justify-center">
          {!loading ? <Loading /> : <></>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
