/* eslint-disable react-hooks/static-components */
"use client";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/src/lib/axios";
import { ActivityDashType } from "@/src/types";
import Image from "next/image";
import { Card } from "@/src/components/ui/card";
import { Separator } from "@/src/components/ui/separator";

const DetailActivity = ({ actId }: { actId: number }) => {
  const [act, setAct] = useState<ActivityDashType | null>(null);

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

  const DetailItem = ({
    label,
    value,
  }: {
    label: string;
    value?: string | number | null;
  }) => (
    <div className="space-y-1">
      <p className="text-sm font-medium text-[#1A4D2E]">{label}</p>
      <p className="text-sm text-muted-foreground wrap-break-word">
        {value || "-"}
      </p>
    </div>
  );
  return (
    <Card className="m-6 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="font-semibold text-[#1A4D2E] mb-4">
            Dokumentasi Kegiatan
          </h2>

          {act?.photo_url ? (
            <Image
              src={act.photo_url}
              alt={act.activity_name}
              width={700}
              height={450}
              unoptimized
              className="w-full rounded-xl border object-cover aspect-video"
            />
          ) : (
            <div className="flex aspect-video items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
              Tidak ada foto
            </div>
          )}
        </div>

        <div>
          <h2 className="font-semibold text-[#1A4D2E] mb-4">
            Informasi Kegiatan
          </h2>

          <div className="space-y-5">
            {/* // eslint-disable-next-line react-hooks/static-components */}
            <DetailItem label="Jenis Kegiatan" value={act?.nama_tipe} />

            <Separator />

            <DetailItem label="Nama Kegiatan" value={act?.activity_name} />

            <Separator />

            <DetailItem label="Deskripsi" value={act?.deskripsi} />

            <Separator />

            <DetailItem
              label="Tanggal Kegiatan"
              value={act?.tanggal_kegiatan}
            />

            <Separator />

            <DetailItem label="Lokasi" value={act?.tempat} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DetailActivity;
