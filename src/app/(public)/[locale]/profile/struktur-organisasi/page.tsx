'use client'
import { axiosInstance } from '@/lib/axios';
import StrukturOrganisasi from '@/src/features/StrukturOrg'
import { StrukturDashType } from '@/src/types';
import { useEffect, useState } from 'react';

const StrukturOrgPage = () => {
  const [struktur, setStruktur] = useState<StrukturDashType[]>([]);

useEffect(() => {
  const getData = async () => {
    const res = await axiosInstance.get("/api/v1/struktur");
    setStruktur(res.data.data);
  };

  getData();
}, []);
  return (
   <StrukturOrganisasi/>
  )
}

export default StrukturOrgPage