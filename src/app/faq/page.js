"use client"
import { useState } from 'react';

function QuestionAnswer(props) {
    return (
        <div className="!justify-start">
        <p className="text-lg text-[#513223] font-bold italic pt-4 pr-5 pl-5 font-inter mt-5">
            Q: {props.question}
        </p>
        <p className="text-lg text-[#513223] pb-4 pr-5 pl-5 italic font-inter mb-5">
            A: {props.answer}
        </p>
        </div>
        )
}

export default function FAQs(){
    const [faq, setFAQ] = useState([
        {"question": "Is Pottery @ Brown beginner friendly?", 
        "answer": "Yes! Although we don't offer formal beginner classes, all sessions at Mudstone and BDW have Studio Aides to offer guidance and manage the space. However, we encourage all participants to review resources on basic clay and ceramics practices before attending."},
        {"question": "When does the club meet?", "answer": "Sessions are throughout the week for the BDW -- see the Calendly for more details. The schedule for Mudstone also fluctuates, though is usually on the weekends. Workshops are infrequent and weather-dependent. "}, 
        {"question": "How do I join?", "answer": "Please fill out this form to be added to the email list! Opportunities will be sent to you as they open up."}, 
        {"question": "What's the commitment level?", "answer": "The commitment level varies, and depends on which program you are attending. BDW sessions are on a sign-up basis, but we require pieces to be finished within two weeks for storage reasons. Mudstone requires a commitment of ~3 hours per week, over 4 weeks."}, 
        // {"question": "", "answer": ""}, 
        ]);
    return (
        <main className="bg-[url(/background.png)] bg-cover bg-center min-h-screen flex flex-col justify-center p-10 h-full">
            <div className="flex flex-col min-h-full">
                <h1 className="text-[50px] font-hedvig text-[#513223] mx-auto !justify-center !items-center">Frequently Asked Questions</h1>
                {faq.map((qna) =>
                    <QuestionAnswer key={qna.question} question={qna.question} answer={qna.answer}> </QuestionAnswer>
                    )}
                
            </div>
        </main>
    )
}

