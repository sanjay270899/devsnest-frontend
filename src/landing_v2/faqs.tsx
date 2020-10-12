import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import Nav from './nav';
import './landing.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

const faqsData = [
  {
    question: `What is the ISA model?`,
    answer: `ISA is the Income Share Agreement. It is a payment model, where you pay us a percentage of your income. That is you pay the course fees only after you start earning with a minimum annual package of 5LPA.

While enrolling with ISA, you will only pay the registration fee which is 20k at the time of enrolling with us. And then until you are placed with a min package of 5LPA. You pay us 15% of your monthly salary for 2 years or until a max cap of 1.3Lakhs is reached. If you don’t get a job of 5LPA within 1 year of completion of course ISA expires.

The idea here is we win together, as we get the payment only after our teachings  and skills embraced have enabled you to earn a good offer.`,
  },
  {
    question: `How much do I have to pay for ISA?`,
    answer: `You pay 15% of your monthly salary till 2 years, with a max cap being 1.3L + GST.  i,e the ISA ends as soon as you have paid us back 1.3L + GST.

In this way, you end up paying only 1.3 lakh + GST no matter how high is your salary,

Example

Your CTC is 12LPA, which makes your monthly salary 1L, so you pay us 15% of 1L i.e. 15,000 per month. Ideally you should pay us for 2 years, but with 15,000 ISA 1.3L + GST is reached in 9 months. So you will stop paying us after 9 months.`,
  },
  {
    question: `From when and how long will I have to make the ISA payments?`,
    answer: `Your payment  starts after you join your first job and get your first salary. ISA payments last for the next 2 years or until you have paid us back 1.3L + GST.`,
  },
  {
    question: `Why is ISA payment more than upfront payment?`,
    answer: `Since the risk involved here is high, we ensure the amount is proportionate.`,
  },
  {
    question: `Is the % charged on CTC?`,
    answer: `Yes we charge the percentage on CTC.`,
  },
  {
    question: `What if I don’t get placed with a 5lpa offer?`,
    answer: `We trust our process and teaching, and make sure this never happens. However if for any reason, unfortunately you do not have an offer paying more than 5LPA until 1 year, you do not have to pay us anything.

ISA is valid for 1 year, as we believe our mentorship can help you crack a better paying job  soon if not now. You can always keep looking for better opportunities within Devsnest’s hiring network.

Post 1 year of completion the ISA expires, and you won't be liable to pay anymore.`,
  },
  {
    question: `Can I see the copy of ISA?`,
    answer: `Yes, definitely.
As you go through the enrollment process post your selection,  you sign the documents and receive a copy of it at the end.`,
  },
  {
    question: `Do I need to submit any document/guarantee?`,
    answer: `Since we are going to work with you and mentor you to become a better developer, we would need some security collateral to cover any risks. And for this you would have to submit 3 Bank Account Cheques. 2 of ₹ 50,000 and one of  ₹ 30,000.
We will not encash but in case of any ISA breach, we would use this to cover the fees.
Other than recovery cheques we don't need any document.`,
  },
  {
    question: `What is an ISA breach?`,
    answer: `An ISA breach happens when you do not follow any of the terms & conditions written in the ISA.
What and when will the ISA recovery cheques be used?
We want to run on trust, and would avoid this as much as we can, but Incases we have to, we would use it in cases of ISA Breach, or when you do not pay back any invoiced amount.

After completion of ISA, or complete repayment, we will return/destroy the cheques.`,
  },
  {
    question: `Do I have to submit any documents as a security?`,

    answer: `No you wouldn't need to submit any documents/hard copy, only the ISA recovery cheques are required,`,
  },
  {
    question: `How will you verify my income?`,
    answer: `As per the ISA, you will be legally bound to furnish all the documents relevant to your Income such as Offer Letter, Salary Slips, Income Tax Returns, Bank Statements, etc.`,
  },
  {
    question: `What will happen if I get fired or quit the job?`,
    answer: `You still have to keep paying.

Our training helped you crack the job, and we made sure you reach that level and keep growing in your career.
Post that it would be your choice, and between you and your company. We believe that we have embarked on the required training and it wouldn't be difficult for you to find the next job either.

However if you wanna find something through Devsnest network, we would be more than happy to help our alumni.`,
  },
  {
    question: `What happens if I change my job?`,

    answer: `Yes, you will have to keep paying. Our training and responsibility is to get you the first job. Post that you would grow with your skill and effort.`,
  },
  {
    question: `What happens if I join a job with a package less than 5LPA?`,
    answer: `In the rare case that you don't get a job of Rs. 5 LPA, your repayment will not start.

  Your repayment will only start if you get a job >= 5 LPA within 1 year of completing the course. Your payment period will only be 15% till the 2nd year after the end of course.`,
  },
  {
    question: `What happens if I choose a job with less than 5LPA for personal reasons?`,
    answer: `If you have multiple offers, of which one is > 5LPA, you would have to pay us, irrespective of which one you choose.

Since we have equipped you to crack a 5LPA job which is greater than minimum guaranteed, ISA will kick off irrespective of which offer you accept.`,
  },
  {
    question: `What happens if you drop out or are kicked out of the course?`,
    answer: `Within 2 weeks:
 You do not have to pay anything. However your registration fees 20k remains nonrefundable, as you would have been provided with the study materials and other documents..

Post 2 Weeks:
In case you drop out after 2 weeks, an invoice until that time of the course will be raised to you, and you will have to pay it within 30days.
90% attendance is mandatory and projects are compulsory, except for exceptional cases. If you do not adhere to the requirements you might be laid off. Cases where you are laid off from the course the above invoice would apply.`,
  },
  {
    question: `What will happen if I do not pay the invoiced amount?`,
    answer: `As much as we would hate to do it, we would have to use the recovery cheques in case you do not pay the above amount. And in case they bounce and we can't recover the amount, legal actions would be taken.

We want to run an organisation on mutual trust and we would hate it if we would have to make such efforts, and we would like if you understand the same and help us both keep that trust up.`,
  },
  {
    question: `Can I pay all the amount together?`,

    answer: `We understand some of us would not want to have the liabilities of continuous instalments, of course you can pay the whole amount anytime, and we would love to offer you 10% off in case you choose to pay at once in the beginning.`,
  },
  {
    question: `What if I don't pay?`,

    answer: `As much as we would hate to do it, we would have to use your cheques in case you do not pay the above amount. And in case they bounce/we can't get our money, legal actions would be taken.

We want to run an organisation on mutual trust and we would hate it if we would have to make such efforts, and we would like if you understand the same and help us both keep that trust up.
If I get placed without the help of your placement cell, am I still obliged to pay?
If you get a job within 2 weeks from the start of your course, you don’t have to pay for anything. But after that time period, you’ll have to pay even if you get placed outside our hiring network.

We believe that during these 6-8 months you'll receive tremendous learnings which will help you crack interviews for software development jobs.`,
  },
  {
    question: `I already hold an offer with a package more than 5LPA, how does ISA work for me?`,
    answer: `We are happy to know you have been doing well and we believe we can add value. Maybe get you a better offer or help you go to the next level at your job. For such special cases you can reach out to us, and we can discuss in detail on a model that would work for us both.`,
  },
  {
    question: `I'm in my 2nd/3rd year, how will ISA work for me?`,
    answer: `We only have ISA for students who can be employed in the next 1 year of the course completion. For others we do not support ISA currently. But in case you are really interested in joining us, and won't be able to pay upfront, we can discuss this on a case to case basis. Feel free to reach out to us in that case. :)`,
  },
];

function Faq() {
  return (
    <div className="landing-v2">
      <Nav faqs={true} />
      <section className="faq" id="read">
        <div className="headingx faq__heading">ISA FAQs</div>
        <div className="faq__container">
          <Accordion>
            {faqsData.map((faq, index) => {
              const { question, answer } = faq;

              return (
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
                    {question}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={`${index}`}>
                    <Card.Body>{answer}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              );
            })}
          </Accordion>
        </div>
      </section>
    </div>
  );
}

export default Faq;
