import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
function FaqSection({faqs}) {
  return (
      <Accordion type="single" collapsible defaultValue="item-1" className="w-full md:w-[80%] md:mx-auto space-y-6 " >
      {faqs?.map((item, idx) => (
        <AccordionItem value={`item-${idx + 1}`} key={idx} className="border-b-0">
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent className={'bg-light-black p-5 rounded-2xl'}>
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
      </Accordion>

  )
}

export default FaqSection
