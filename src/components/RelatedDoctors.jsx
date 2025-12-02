import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ docId, speciality }) => {
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDoc] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorsData); // 💥 important
    }
  }, [doctors, docId, speciality]);

  return (
    <div
      className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10"
      id="related-doctors"
    >
      <h1 className="text-3xl font-medium">Related Doctors</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Browse similar doctors you may be interested in.
      </p>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5 gap-y-6 sm:px-0">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              scrollTo(0, 0);
              navigate(`/appointment/${item._id}`);
            }}
            className="border border-red-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
          >
            <img className="bg-red-50" src={item.image} alt={item.name} />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-900 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate(`/doctors`);
          scrollTo(0, 0);
        }}
        className="bg-red-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        More
      </button>
    </div>
  );
};

export default RelatedDoctors;
