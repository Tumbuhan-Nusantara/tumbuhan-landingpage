"use client";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { CreateArticleDashType } from "@/src/types";


const DetailArticle = ({ articleId }: { articleId: number }) => {
  const [article, setArticle] = useState<CreateArticleDashType>({});

  useEffect(() => {
    const getArticle = async (id: number) => {
      try {
        const response = await axiosInstance.get(`/api/v1/articles/${id}`);
        const art = response.data;
        setArticle(art);
      } catch (error) {
        throw error;
      }
    };
    getArticle(articleId);
  }, [articleId]);
  return (
    <div className="grid gap-4">
      <div>
        <h1 className="text-black">Judul</h1>
        <p>{article.judul}</p>
      </div>
      <div>
        <h1 className="text-black">Penulis</h1>
        <p>{article.doi}</p>
      </div>
      <div>
        <h1 className="text-black">Tahun</h1>
        <p>{article.tahun}</p>
      </div>
      <div>
        <h1 className="text-black">Volume</h1>
        <p>{article.volume}</p>
      </div>
      <div>
        <h1 className="text-black">DOI/ Link Artikel</h1>
        <p>{article.link}</p>
      </div>
    </div>
  );
};

export default DetailArticle;
