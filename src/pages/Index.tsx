
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import { 
  Brain, 
  List, 
  Search, 
  AlertTriangle, 
  Shuffle, 
  Layers, 
  GitCompare, 
  MessageCircleQuestion, 
  HelpCircle, 
  User, 
  ListChecks 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero />
      
      <InfoSection
        id="what-is-ocd"
        titleKey="what-is-ocd.title"
        icon={<Brain className="w-5 h-5" />}
        descriptionKey="what-is-ocd.description"
      >
        <div className="glass-card p-6 md:p-8">
          <p className="mb-4">
            {t("what-is-ocd.p1")}
          </p>
          <p className="mb-4">
            {t("what-is-ocd.p2")}
          </p>
          <p>
            {t("what-is-ocd.p3")}
          </p>
        </div>
      </InfoSection>
      
      <InfoSection
        id="characteristics"
        titleKey="characteristics.title"
        icon={<ListChecks className="w-5 h-5" />}
        inverse={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">{t("characteristics.obsessions.title")}</h3>
            <p className="text-gray-700">
              {t("characteristics.obsessions.description")}
            </p>
          </div>
          
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">{t("characteristics.compulsions.title")}</h3>
            <p className="text-gray-700">
              {t("characteristics.compulsions.description")}
            </p>
          </div>
          
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">{t("characteristics.insight.title")}</h3>
            <p className="text-gray-700">
              {t("characteristics.insight.description")}
            </p>
          </div>
          
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">{t("characteristics.time.title")}</h3>
            <p className="text-gray-700">
              {t("characteristics.time.description")}
            </p>
          </div>
        </div>
      </InfoSection>
      
      <InfoSection
        id="symptoms"
        titleKey="symptoms.title"
        icon={<List className="w-5 h-5" />}
        descriptionKey="symptoms.description"
      >
        <div className="glass-card p-6 md:p-8">
          <h3 className="text-xl font-alegreya font-black mb-4">{t("symptoms.obsessive.title")}</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>{t("symptoms.obsessive.s1")}</li>
            <li>{t("symptoms.obsessive.s2")}</li>
            <li>{t("symptoms.obsessive.s3")}</li>
            <li>{t("symptoms.obsessive.s4")}</li>
            <li>{t("symptoms.obsessive.s5")}</li>
          </ul>
          
          <h3 className="text-xl font-alegreya font-black mb-4">{t("symptoms.compulsive.title")}</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>{t("symptoms.compulsive.s1")}</li>
            <li>{t("symptoms.compulsive.s2")}</li>
            <li>{t("symptoms.compulsive.s3")}</li>
            <li>{t("symptoms.compulsive.s4")}</li>
            <li>{t("symptoms.compulsive.s5")}</li>
          </ul>
          
          <h3 className="text-xl font-alegreya font-black mb-4">{t("symptoms.associated.title")}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("symptoms.associated.s1")}</li>
            <li>{t("symptoms.associated.s2")}</li>
            <li>{t("symptoms.associated.s3")}</li>
            <li>{t("symptoms.associated.s4")}</li>
            <li>{t("symptoms.associated.s5")}</li>
          </ul>
        </div>
      </InfoSection>
      
      <InfoSection
        id="diagnosis"
        titleKey="diagnosis.title"
        icon={<Search className="w-5 h-5" />}
        inverse={true}
      >
        <div className="glass-card p-6 md:p-8">
          <p className="mb-4">
            {t("diagnosis.p1")}
          </p>
          
          <h3 className="text-xl font-alegreya font-black mb-3">{t("diagnosis.criteria.title")}</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>{t("diagnosis.criteria.c1")}</li>
            <li>{t("diagnosis.criteria.c2")}</li>
            <li>{t("diagnosis.criteria.c3")}</li>
            <li>{t("diagnosis.criteria.c4")}</li>
          </ul>
          
          <h3 className="text-xl font-alegreya font-black mb-3">{t("diagnosis.tools.title")}</h3>
          <p className="mb-4">
            {t("diagnosis.tools.p1")}
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>{t("diagnosis.tools.t1")}</li>
            <li>{t("diagnosis.tools.t2")}</li>
            <li>{t("diagnosis.tools.t3")}</li>
          </ul>
          
          <h3 className="text-xl font-alegreya font-black mb-3">{t("diagnosis.tests.title")}</h3>
          <p>
            {t("diagnosis.tests.p1")}
          </p>
        </div>
      </InfoSection>
      
      <InfoSection
        id="prognosis"
        titleKey="prognosis.title"
        icon={<MessageCircleQuestion className="w-5 h-5" />}
      >
        <div className="glass-card p-6 md:p-8">
          <p className="mb-4">
            {t("prognosis.p1")}
          </p>
          
          <h3 className="text-xl font-alegreya font-black mb-3">{t("prognosis.treatment.title")}</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>{t("prognosis.treatment.t1")}</li>
            <li>{t("prognosis.treatment.t2")}</li>
            <li>{t("prognosis.treatment.t3")}</li>
            <li>{t("prognosis.treatment.t4")}</li>
          </ul>
          
          <h3 className="text-xl font-alegreya font-black mb-3">{t("prognosis.course.title")}</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>{t("prognosis.course.c1")}</li>
            <li>{t("prognosis.course.c2")}</li>
            <li>{t("prognosis.course.c3")}</li>
            <li>{t("prognosis.course.c4")}</li>
            <li>{t("prognosis.course.c5")}</li>
          </ul>
          
          <h3 className="text-xl font-alegreya font-black mb-3">{t("prognosis.factors.title")}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("prognosis.factors.f1")}</li>
            <li>{t("prognosis.factors.f2")}</li>
            <li>{t("prognosis.factors.f3")}</li>
            <li>{t("prognosis.factors.f4")}</li>
            <li>{t("prognosis.factors.f5")}</li>
          </ul>
        </div>
      </InfoSection>
      
      <InfoSection
        id="complications"
        titleKey="complications.title"
        icon={<AlertTriangle className="w-5 h-5" />}
        inverse={true}
      >
        <div className="glass-card p-6 md:p-8">
          <p className="mb-6">
            {t("complications.p1")}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-alegreya font-black mb-3">{t("complications.functional.title")}</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>{t("complications.functional.f1")}</li>
                <li>{t("complications.functional.f2")}</li>
                <li>{t("complications.functional.f3")}</li>
                <li>{t("complications.functional.f4")}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-alegreya font-black mb-3">{t("complications.social.title")}</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>{t("complications.social.s1")}</li>
                <li>{t("complications.social.s2")}</li>
                <li>{t("complications.social.s3")}</li>
                <li>{t("complications.social.s4")}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-alegreya font-black mb-3">{t("complications.physical.title")}</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>{t("complications.physical.p1")}</li>
                <li>{t("complications.physical.p2")}</li>
                <li>{t("complications.physical.p3")}</li>
                <li>{t("complications.physical.p4")}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-alegreya font-black mb-3">{t("complications.psychological.title")}</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("complications.psychological.p1")}</li>
                <li>{t("complications.psychological.p2")}</li>
                <li>{t("complications.psychological.p3")}</li>
                <li>{t("complications.psychological.p4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </InfoSection>
      
      <InfoSection
        id="comorbidities"
        titleKey="comorbidities.title"
        icon={<Shuffle className="w-5 h-5" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">{t("comorbidities.depression.title")}</h3>
            <p className="text-gray-700">
              {t("comorbidities.depression.description")}
            </p>
          </div>
          
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">{t("comorbidities.anxiety.title")}</h3>
            <p className="text-gray-700">
              {t("comorbidities.anxiety.description")}
            </p>
          </div>
          
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">{t("comorbidities.tic.title")}</h3>
            <p className="text-gray-700">
              {t("comorbidities.tic.description")}
            </p>
          </div>
          
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">{t("comorbidities.adhd.title")}</h3>
            <p className="text-gray-700">
              {t("comorbidities.adhd.description")}
            </p>
          </div>
          
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">{t("comorbidities.body.title")}</h3>
            <p className="text-gray-700">
              {t("comorbidities.body.description")}
            </p>
          </div>
          
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">{t("comorbidities.other.title")}</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>{t("comorbidities.other.o1")}</li>
              <li>{t("comorbidities.other.o2")}</li>
              <li>{t("comorbidities.other.o3")}</li>
              <li>{t("comorbidities.other.o4")}</li>
            </ul>
          </div>
        </div>
      </InfoSection>
      
      <InfoSection
        id="spectrum"
        titleKey="spectrum.title"
        icon={<Layers className="w-5 h-5" />}
        inverse={true}
      >
        <div className="glass-card p-6 md:p-8">
          <p className="mb-6">
            {t("spectrum.p1")}
          </p>
          
          <h3 className="text-xl font-alegreya font-black mb-4">{t("spectrum.includes.title")}</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>{t("spectrum.includes.i1")}</strong></li>
            <li><strong>{t("spectrum.includes.i2")}</strong></li>
            <li><strong>{t("spectrum.includes.i3")}</strong></li>
            <li><strong>{t("spectrum.includes.i4")}</strong></li>
            <li><strong>{t("spectrum.includes.i5")}</strong></li>
            <li><strong>{t("spectrum.includes.i6")}</strong></li>
            <li><strong>{t("spectrum.includes.i7")}</strong></li>
            <li><strong>{t("spectrum.includes.i8")}</strong></li>
          </ul>
          
          <p>
            {t("spectrum.p2")}
          </p>
        </div>
      </InfoSection>
      
      <InfoSection
        id="ocd-vs-autism"
        titleKey="ocd-vs-autism.title"
        icon={<GitCompare className="w-5 h-5" />}
      >
        <div className="glass-card p-6 md:p-8">
          <p className="mb-6">
            {t("ocd-vs-autism.p1")}
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-alegreya font-black mb-3">{t("ocd-vs-autism.similarities.title")}</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("ocd-vs-autism.similarities.s1")}</li>
                <li>{t("ocd-vs-autism.similarities.s2")}</li>
                <li>{t("ocd-vs-autism.similarities.s3")}</li>
                <li>{t("ocd-vs-autism.similarities.s4")}</li>
                <li>{t("ocd-vs-autism.similarities.s5")}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-alegreya font-black mb-3">{t("ocd-vs-autism.differences.title")}</h3>
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2 px-4">{t("ocd-vs-autism.differences.feature")}</th>
                    <th className="text-left py-2 px-4">{t("ocd-vs-autism.differences.ocd")}</th>
                    <th className="text-left py-2 px-4">{t("ocd-vs-autism.differences.autism")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-medium">{t("ocd-vs-autism.differences.nature.title")}</td>
                    <td className="py-2 px-4">{t("ocd-vs-autism.differences.nature.ocd")}</td>
                    <td className="py-2 px-4">{t("ocd-vs-autism.differences.nature.autism")}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-medium">{t("ocd-vs-autism.differences.insight.title")}</td>
                    <td className="py-2 px-4">{t("ocd-vs-autism.differences.insight.ocd")}</td>
                    <td className="py-2 px-4">{t("ocd-vs-autism.differences.insight.autism")}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-medium">{t("ocd-vs-autism.differences.social.title")}</td>
                    <td className="py-2 px-4">{t("ocd-vs-autism.differences.social.ocd")}</td>
                    <td className="py-2 px-4">{t("ocd-vs-autism.differences.social.autism")}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-medium">{t("ocd-vs-autism.differences.communication.title")}</td>
                    <td className="py-2 px-4">{t("ocd-vs-autism.differences.communication.ocd")}</td>
                    <td className="py-2 px-4">{t("ocd-vs-autism.differences.communication.autism")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium">{t("ocd-vs-autism.differences.distress.title")}</td>
                    <td className="py-2 px-4">{t("ocd-vs-autism.differences.distress.ocd")}</td>
                    <td className="py-2 px-4">{t("ocd-vs-autism.differences.distress.autism")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <h3 className="text-xl font-alegreya font-black mb-3">{t("ocd-vs-autism.assessment.title")}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/90 p-5 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="text-lg font-alegreya font-black mb-2">{t("ocd-vs-autism.assessment.ocd.title")}</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>{t("ocd-vs-autism.assessment.ocd.a1")}</li>
                <li>{t("ocd-vs-autism.assessment.ocd.a2")}</li>
                <li>{t("ocd-vs-autism.assessment.ocd.a3")}</li>
                <li>{t("ocd-vs-autism.assessment.ocd.a4")}</li>
                <li>{t("ocd-vs-autism.assessment.ocd.a5")}</li>
              </ul>
            </div>
            
            <div className="bg-white/90 p-5 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="text-lg font-alegreya font-black mb-2">{t("ocd-vs-autism.assessment.autism.title")}</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>{t("ocd-vs-autism.assessment.autism.a1")}</li>
                <li>{t("ocd-vs-autism.assessment.autism.a2")}</li>
                <li>{t("ocd-vs-autism.assessment.autism.a3")}</li>
                <li>{t("ocd-vs-autism.assessment.autism.a4")}</li>
                <li>{t("ocd-vs-autism.assessment.autism.a5")}</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-alegreya font-black mb-3">{t("ocd-vs-autism.cooccur.title")}</h3>
            <p className="mb-4">
              {t("ocd-vs-autism.cooccur.p1")}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("ocd-vs-autism.cooccur.c1")}</li>
              <li>{t("ocd-vs-autism.cooccur.c2")}</li>
              <li>{t("ocd-vs-autism.cooccur.c3")}</li>
              <li>{t("ocd-vs-autism.cooccur.c4")}</li>
              <li>{t("ocd-vs-autism.cooccur.c5")}</li>
            </ul>
          </div>
        </div>
      </InfoSection>
      
      <InfoSection
        id="support"
        titleKey="support.title"
        icon={<HelpCircle className="w-5 h-5" />}
        inverse={true}
      >
        <div className="glass-card p-6 md:p-8">
          <p className="mb-6">
            {t("support.p1")}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-alegreya font-black mb-3">{t("support.professional.title")}</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("support.professional.p1")}</li>
                <li>{t("support.professional.p2")}</li>
                <li>{t("support.professional.p3")}</li>
                <li>{t("support.professional.p4")}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-alegreya font-black mb-3">{t("support.organizations.title")}</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("support.organizations.o1")}</li>
                <li>{t("support.organizations.o2")}</li>
                <li>{t("support.organizations.o3")}</li>
                <li>{t("support.organizations.o4")}</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-alegreya font-black mb-3">{t("support.selfhelp.title")}</h3>
            <p className="mb-4">
              {t("support.selfhelp.p1")}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("support.selfhelp.s1")}</li>
              <li>{t("support.selfhelp.s2")}</li>
              <li>{t("support.selfhelp.s3")}</li>
              <li>{t("support.selfhelp.s4")}</li>
              <li>{t("support.selfhelp.s5")}</li>
            </ul>
          </div>
        </div>
      </InfoSection>
      
      <InfoSection
        id="personal-stories"
        titleKey="personal-stories.title"
        icon={<User className="w-5 h-5" />}
      >
        <div className="glass-card p-6 md:p-8">
          <p className="mb-6">
            {t("personal-stories.p1")}
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-alegreya font-black mb-3">{t("personal-stories.experiences.title")}</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("personal-stories.experiences.e1")}</li>
              <li>{t("personal-stories.experiences.e2")}</li>
              <li>{t("personal-stories.experiences.e3")}</li>
              <li>{t("personal-stories.experiences.e4")}</li>
              <li>{t("personal-stories.experiences.e5")}</li>
            </ul>
          </div>
          
          <p className="italic text-gray-600 border-l-4 border-primary pl-4 py-2">
            {t("personal-stories.quote")}
          </p>
        </div>
      </InfoSection>
      
      <InfoSection
        id="order-cleanliness"
        titleKey="order-cleanliness.title"
        icon={<ListChecks className="w-5 h-5" />}
        descriptionKey="order-cleanliness.description"
        inverse={true}
      >
        <div className="glass-card p-6 md:p-8">
          <p className="mb-4">
            {t("order-cleanliness.p1")}
          </p>
          <p className="mb-6">
            {t("order-cleanliness.p2")}
          </p>
          
          <h3 className="text-xl font-alegreya font-black mb-4">{t("order-characteristics.title")}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("order-characteristics.c1")}</li>
            <li>{t("order-characteristics.c2")}</li>
            <li>{t("order-characteristics.c3")}</li>
            <li>{t("order-characteristics.c4")}</li>
            <li>{t("order-characteristics.c5")}</li>
            <li>{t("order-characteristics.c6")}</li>
          </ul>
        </div>
      </InfoSection>
      
      <InfoSection
        id="toc-education-work"
        titleKey="toc-education-work.title"
        icon={<Brain className="w-5 h-5" />}
        descriptionKey="toc-education-work.description"
      >
        <div className="glass-card p-6 md:p-8">
          <p className="mb-6">
            {t("toc-education-work.p1")}
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-alegreya font-black mb-4">{t("toc-intelligence.title")}</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>{t("toc-intelligence.i1")}</li>
              <li>{t("toc-intelligence.i2")}</li>
              <li>{t("toc-intelligence.i3")}</li>
              <li>{t("toc-intelligence.i4")}</li>
              <li>{t("toc-intelligence.i5")}</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-alegreya font-black mb-4">{t("successful-professionals.title")}</h3>
            <p className="mb-4">
              {t("successful-professionals.description")}
            </p>
            
            <h4 className="text-lg font-alegreya font-black mb-3">{t("successful-professionals.examples.title")}</h4>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>{t("successful-professionals.examples.e1")}</li>
              <li>{t("successful-professionals.examples.e2")}</li>
              <li>{t("successful-professionals.examples.e3")}</li>
              <li>{t("successful-professionals.examples.e4")}</li>
              <li>{t("successful-professionals.examples.e5")}</li>
              <li>{t("successful-professionals.examples.e6")}</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-alegreya font-black mb-3">{t("academic-performance.title")}</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("academic-performance.a1")}</li>
                <li>{t("academic-performance.a2")}</li>
                <li>{t("academic-performance.a3")}</li>
                <li>{t("academic-performance.a4")}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-alegreya font-black mb-3">{t("workplace-characteristics.title")}</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("workplace-characteristics.w1")}</li>
                <li>{t("workplace-characteristics.w2")}</li>
                <li>{t("workplace-characteristics.w3")}</li>
                <li>{t("workplace-characteristics.w4")}</li>
                <li>{t("workplace-characteristics.w5")}</li>
              </ul>
            </div>
          </div>
        </div>
      </InfoSection>
      
      <Footer />
    </div>
  );
};

export default Index;
