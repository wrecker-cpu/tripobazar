import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

export default function BreadCrumbsLink() {
    const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  return (
    <div className='p-2'>
       <p className="text-med-green text-base flex items-center ">
          <Link to={"/"}>Home</Link>
          {pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const isLastSegment = index === pathSegments.length - 1;
            return (
              <React.Fragment key={path}>
                <span>
                  <RiArrowRightSLine className="w-5 h-5" />
                </span>
                {isLastSegment ? (
                  <span className="capitalize">
                    {segment.replace(/-/g, " ")}
                  </span>
                ) : (
                  <Link to={path} className="hover:underline capitalize">
                    {segment.replace(/-/g, " ")}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </p>
    </div>
  )
}
