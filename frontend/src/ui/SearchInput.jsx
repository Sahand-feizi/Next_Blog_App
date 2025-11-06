"use client";
import React, { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LuSearch } from "react-icons/lu";

function SearchInput({ className = "", containerClassName = "" }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // ✅ همیشه مقدار رشته‌ای بساز
  const newParams = useMemo(() => {
    return new URLSearchParams(searchParams?.toString() || "");
  }, [searchParams]);

  const submitHandler = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value.trim();

    if (!searchText) newParams.delete("search");
    else newParams.set("search", searchText);

    const query = newParams.toString();

    if (pathname === "/") router.push(`/blogs?${query}`);
    else if (pathname.includes("/profile")) router.push(`/profile/blogs?${query}`);
    else router.push(`${pathname}?${query}`);
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`flex items-center justify-between relative w-full z-20 ${containerClassName}`}
    >
      <input
        className={`Search_input z-20 ${className}`}
        placeholder="جستجو  بلاگ ها، متن ها و ..."
        name="search"
        id="search"
        defaultValue={searchParams?.get("search") || ""}
      />
      <button
        type="submit"
        className="absolute left-3 top-[.6rem] z-20 cursor-pointer"
      >
        <LuSearch className="text-2xl text-secondary-300" />
      </button>
    </form>
  );
}

export default SearchInput;
