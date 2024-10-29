"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BlogCard from "./BlogCard";
import { useTranslations } from "next-intl";
import server from "@/misc/axios";
import { SERVER_IMAGE_URL } from "@/misc/constants";
import { Blog, BlogsResponse } from "@/misc/interfaces";
import { dateConversion, getShortDescription } from "@/lib/utils";
import { useParams } from "next/navigation";
import Link from "next/link";

const Blogs = () => {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations("BlogSection");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await server.get<BlogsResponse>("/Blogs", {
          params: {
            populate: ["categories", "image"],
            pagination: {
              page: 1,
              pageSize: 4,
            },
          },
        });
        setBlogs(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (blogs.length === 0) return null;

  return (
    <div className="bg-primary">
      <div className=" max-w-[93%] xl:max-w-[83%] mx-auto py-[120px]">
        <div className="flex flex-col justify-center items-center">
          <p className="text-customPink text-[24px] leading-[34px] text-center">
            {t("ourBlogs")}
          </p>
          <p className="text-[2.5rem] md:text-[3.5rem] leading-[55px] md:leading-[66px] font-semibold text-center text-white">
            {t("exploreBlogs")}
          </p>
          <p className="text-[18px] leading-[30px] text-center mt-[16px] text-[#EBEBEB]">
            {t("blogDescription")}
          </p>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-[40%,auto]  xl:flex lg:flex-row flex-col gap-[21px] mt-[48px]">
          <div className="relative rounded-2xl overflow-hidden">
            <Image className="h-full object-cover" src={SERVER_IMAGE_URL + blogs?.[0]?.image?.url} alt="blog" width={548} height={656} />
            
            <div className="absolute bottom-0 text-white mx-[30px] xs:mx-[49px] mb-[32px]">
              <p className="text-[14px] leading-[26px]">
                Published on {dateConversion(blogs?.[0]?.publishedAt)} |{" "}
                {blogs?.[0]?.categories?.[0]?.title}
              </p>
              <p className="text-[24px] leading-[34px] py-[9px]">
                {getShortDescription(blogs?.[0]?.deccription)}
              </p>
              <Link
                href={`/${locale}/blogs/${blogs?.[0]?.id}`}
                className="text-customPink flex items-center gap-3"
              >
                <p className="text-white">Learn More</p>
                <Image
                  src={"/assets/HomeImages/ArrowRight.svg"}
                  width={20}
                  height={20}
                  alt="no image"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            {blogs?.slice(1, 4).map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
