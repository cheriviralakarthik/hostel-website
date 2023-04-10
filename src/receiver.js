import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Button, Card, Carousel, Modal, TextInput } from "flowbite-react";
import { IconArrowAutofitRight } from "@tabler/icons-react";
const Receiver = () => {
  const [data, setData] = useState(null);
  const [bool, setBool] = useState(false);
  const [show, setShow] = useState(false);
  const [selectid, setSelectid] = useState(null);
  const [request, setRequest] = useState({});
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const datatosearch = location.state;
  useEffect(() => {
    datatofetch();
  }, []);
  const datatofetch = async () => {
    setLoader(true);
    const responce = await axios.post("http://43.205.117.217:4000/getareas", {
      area: datatosearch,
    });
    if (responce.status === 200) {
      setLoader(false);
      setData(responce.data);
      console.log(responce.data);
      setBool(true);
    } else {
      console.log("error");
    }
  };
  const submitrequest = async (id) => {
    const responce = await axios.post(
      "http://43.205.117.217/requestforhostel",
      {
        name: request.name,
        phno: request.phno,
        dts: request.dts,
        id: id,
      }
    );
    if (responce.status === 200) {
      console.log(responce.data);
    } else {
      console.log("error");
    }
  };

  return (
    <div>
      <div className="flex justify-center pt-10">
        <div className=" xs:text-xl sm:w-[90%] h-20  bg-orange-100 rounded-lg text-gray-600 text-5xl font-medium font-style: italic font-mono flex justify-center items-center">
          <h1>Hostels in {datatosearch}</h1>
        </div>
      </div>

      {loader && (
        <div className="flex  justify-center align-items pt-10 ">
          <div
            role="status"
            class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
          >
            <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                class="w-12 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <div class="w-full">
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}

      <div className="flex justify-around flex-wrap lg:p-10">
        {bool &&
          data.map((item, index) => (
            <Card key={index} className="mt-5 ">
              <div className="h-24 sm:h-12 xl:h-28 2xl:h-32 w-64  sm:w-auto md:w-32 xl:w-64  ">
                <Carousel className="xs:h-32">
                  {item.images.map((image, index) => (
                    <img key={index} src={`${image}`} alt="..." />
                  ))}
                </Carousel>
              </div>
              <div className="mt-4 bg-rose-50 rounded-sm">
                <div className="flex items-center justify-center">
                  <h5 className="text-lg  tracking-tight text-gray-700 dark:text-white">
                    {item.hostelname}
                  </h5>
                </div>
                <div className=" flex flex-row justify-around">
                  <h6 className="font-normal text-gray-700 dark:text-gray-400">
                    {`Area:${item.area}`}
                  </h6>
                  <h6 className="font-normal text-gray-700 dark:text-gray-400">
                    {`Avl:${item.availablebeds}`}
                  </h6>
                </div>
                <div className="flex flex-row justify-around bg-rose-100 ">
                  <div className="bg-rose-300 rounded-md pl-5 pr-5 ">
                    <h6 className="font-normal text-gray-700 dark:text-gray-400 pt-2 ">
                      {`starts from :${item.pricestarts}`}
                    </h6>
                  </div>
                  <>
                    <Button
                      outline={true}
                      gradientDuoTone="redToYellow"
                      onClick={() => (setSelectid(item.id), setShow(true))}
                    >
                      Request
                      <IconArrowAutofitRight className="ml-2 h-5 w-5" />
                    </Button>
                  </>
                </div>
              </div>
            </Card>
          ))}

        {show ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Request for Lock bed
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShow(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="space-y-6 ">
                    <div className="p-5">
                      <TextInput
                        type="text"
                        placeholder="Name"
                        onChange={(e) =>
                          setRequest({
                            ...request,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="p-5">
                      <TextInput
                        type="number"
                        placeholder="Mobile Number"
                        onChange={(e) =>
                          setRequest({
                            ...request,
                            phno: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="p-5">
                      <TextInput
                        type="number"
                        placeholder="No days to stay"
                        onChange={(e) =>
                          setRequest({
                            ...request,
                            dts: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShow(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        console.log(`idpicked:${selectid}`);
                        submitrequest(selectid);
                        setShow(false);
                      }}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Receiver;
