"use client";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import {  NewsDashType } from "@/src/types";
import Image from "next/image";

const DetailNews = ({ newsId }: { newsId: number }) => {
  const [news, setNews] = useState<NewsDashType | null>(null)

  useEffect(() => {
    const getNewsbyId = async (id: number) => {
      try {
        const response = await axiosInstance.get(`/api/v1/news/${id}`);
        const newsNew = response.data;
        setNews(newsNew);
      } catch (error) {
        throw error;
      }
    };
    getNewsbyId(newsId);
  }, [newsId]);
  return (
    <div className="grid gap-4">
      <div>
        <h1 className="text-black">Berita</h1>
        <p>{news?.news_name}</p>
      </div>
      <div>
        <h1 className="text-black">Deskripsi</h1>
        <p>{news?.deskripsi}</p>
      </div>
      <div>
        <h1 className="text-black">Tanggal Berita</h1>
        <p>{news?.tanggal_berita}</p>
      </div>
      <div>
        <h1 className="text-black">Lokasi</h1>
        <p>{news?.tempat}</p>
      </div>
      <div>
        <h1 className="text-black">File Foto</h1>
        <>
          {news?.photo_url ? (
            <Image
              src={news.photo_url}
              alt={news.news_name}
              width={300}
              height={200}
              className="w-64 rounded-lg border object-cover"
              unoptimized
            />
          ) : (
            <>Tidak ada foto</>
          )}
        </>
      </div>
      <div>
        <h1 className="text-black">Link Video</h1>
        <p>{news?.video_link}</p>
      </div>
    </div>
  );
};

export default DetailNews;
