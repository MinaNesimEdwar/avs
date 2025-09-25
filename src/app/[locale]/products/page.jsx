import FilterGrid from '@/app/components/filterGrid';
import FilterPannel from '@/app/components/filterPannel';
import Header from '@/app/components/header';
import { useTranslations } from 'next-intl';
import React from 'react'

function ProductsPage() {
    const t = useTranslations("productHeader");
  return (
    <div className='container  pb-20 pt-24 lg:pt-32  space-y-12'>
      <Header title={t("title")} disc={t("disc")} align="text-center" />
      <div className="grid grid-cols-1 md:grid-cols-[20%_80%] gap-6">
        <div>
           <FilterPannel/> 
        </div>
        <div>
          <FilterGrid />
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
