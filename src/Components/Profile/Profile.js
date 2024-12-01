import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineMapPin } from "react-icons/hi2";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdPersonAddAlt } from "react-icons/md";
import { assets } from '../../Assets/Assets';
import './Profile.css'
const Profile = () => {
  return (
    <div>
      <div className="container">
        <div className="name-main-con">
          <div className="name-con">
            <h1>CB</h1>
          </div>
          <div>
            <h1 className="heading-smi">Hannibal Smith</h1>
            <div className="adress-con">
              <HiOutlineMapPin className="icon" />
              <p>
                1 Market Street San Francisco, CA <br />
                94105
              </p>
            </div>
          </div>
        </div>

        <div className="container1">
          <div className="card">
            <div className="card-1">
              <div className="row">
                <span className="label">Customer ID</span>
                <div>
                  <span className="value">12345</span>
                  <BsThreeDotsVertical className="three-icon" />
                </div>
              </div>
              <div className="row">
                <span className="label">Email Address</span>
                <div>
                  <span className="value">rachel@sample.com</span>
                  <BsThreeDotsVertical className="three-icon" />
                </div>
              </div>
              <div className="row">
                <span className="label">Phone Number</span>
                <div className="row-1">
                  <span className="value">8051298905</span>
                  <BsThreeDotsVertical className="three-icon" />
                </div>
              </div>
            </div>

            <div className="add-section">
              <button className="add-button">
                <IoMdAddCircleOutline className="add-icon" /> <span>Add</span>
              </button>
            </div>
          </div>
        </div>

        <div className="container1">
          <div className="card">
            <div className="card-1">
              <div className="row">
                <span className="label">Loyalty Tier</span>
                <div>
                  <span className="value">Silver</span>
                  <BsThreeDotsVertical className="three-icon" />
                </div>
              </div>
              <div className="row">
                <span className="label">Segment</span>
                <div>
                  <span className="value">Sleepy Customer</span>
                  <BsThreeDotsVertical className="three-icon" />
                </div>
              </div>
            </div>

            <div className="add-section">
              <button className="add-button">
                <IoMdAddCircleOutline className="add-icon" /> <span>Add</span>
              </button>
            </div>
          </div>
        </div>

        <div className="container1">
          <div className="card">
            <div className="card-1">
              <div className="row">
                <span className="label">Lifetime Value</span>
                <div>
                  <span className="value">$ 1M</span>
                  <BsThreeDotsVertical className="three-icon" />
                </div>
              </div>
              <div className="row">
                <span className="label">Propensity to Purchase</span>
                <div>
                  <div className="value1">
                    <img src={assets.yellowPie} />
                    <p className="percent">75 %</p>
                    <BsThreeDotsVertical className="three-icon" />
                  </div>
                </div>
              </div>
            </div>

            <div className="add-section">
              <button className="add-button">
                <IoMdAddCircleOutline className="add-icon" /> <span>Add</span>
              </button>
            </div>
          </div>
        </div>

        <div className="container1">
          <div className="card">
            <div className="card-1">
              <div className="row">
                <span className="label">Engagement Score</span>
                <div>
                  <div className="value1">
                    <img src={assets.greenPie} className='img1' />
                    <p className="percent1">80 %</p>
                    <BsThreeDotsVertical className="three-icon" />
                  </div>
                </div>
              </div>
            </div>

            <div className="add-section">
              <button className="add-button">
                <IoMdAddCircleOutline className="add-icon" /> <span>Add</span>
              </button>
            </div>
          </div>
        </div>

        <button className="button-1">
          <MdPersonAddAlt />
          <p>Assign other Agent</p>
        </button>

        <button className="button-2">
          <p>Assign other Agent</p>
        </button>
      </div>
    </div>
  );
}

export default Profile