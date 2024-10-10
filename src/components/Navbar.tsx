import React from "react";
import { CiSearch } from "react-icons/ci";
import { LiaConciergeBellSolid } from "react-icons/lia";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="navbar bg-base-100 border-b-2">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl text-center">
          <LiaConciergeBellSolid color="#0099FF" /> WorkMeal
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <CiSearch />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered pl-10 w-32 md:w-auto rounded-3xl bg-[#F5F7FA]"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
