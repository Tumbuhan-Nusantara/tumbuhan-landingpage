"use client";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import {  ActivityDashType } from "@/src/types";
import Image from "next/image";

const DetailActivity = ({ actId }: { actId: number }) => {
  const [act, setAct] = useState<ActivityDashType | null>(null)

  useEffect(() => {
    const getActivity = async (id: number) => {
      try {
        const response = await axiosInstance.get(`/api/v1/activities/${id}`);
        const activity = response.data;
        setAct(activity);
      } catch (error) {
        throw error;
      }
    };
    getActivity(actId);
  }, [actId]);
  return (
    <div className="grid gap-4">
      <div>
        <h1 className="text-black">Jenis Kegiatan</h1>
        <p>{act?.nama_tipe}</p>
      </div>
      <div>
        <h1 className="text-black">Kegiatan</h1>
        <p>{act?.activity_name}</p>
      </div>
      <div>
        <h1 className="text-black">Deskripsi</h1>
        <p>{act?.deskripsi}</p>
      </div>
      <div>
        <h1 className="text-black">Tanggal Kegiatan</h1>
        <p>{act?.tanggal_kegiatan}</p>
      </div>
      <div>
        <h1 className="text-black">Lokasi</h1>
        <p>{act?.tempat}</p>
      </div>
      <div>
        <h1 className="text-black">File Foto</h1>
        <>
          {act?.photo_url ? (
            <Image
              src={act.photo_url}
              alt={act.activity_name}
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
    </div>
  );
};

export default DetailActivity;
