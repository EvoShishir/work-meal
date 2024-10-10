import React, { ReactNode } from "react";
import { CiSearch } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { TiHome } from "react-icons/ti";

type Props = {
  children: ReactNode;
};

export default function Sidebar({ children }: Props) {
  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">{children}</div>
      <div className="drawer-side border-r-2">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="text-base-content bg-base-100 min-h-full text-xl w-60 p-4 gap-3">
          {/* Sidebar content here */}
          <div className="form-control relative md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
              <CiSearch />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered pl-10 rounded-3xl"
            />
          </div>
          <ul className="menu text-xl">
            <li>
              <a>
                <TiHome /> Dashboard
              </a>
            </li>
            <li>
              <a>
                <GiReceiveMoney /> Reports
              </a>
            </li>
            <li>
              <a>Transactions</a>
            </li>
            <li>
              <a>Notifications</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
