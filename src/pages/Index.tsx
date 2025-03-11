
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero />
      
      <InfoSection
        id="what-is-ocd"
        title="What is OCD?"
        icon={<Brain className="w-5 h-5" />}
        description="Obsessive-Compulsive Disorder (OCD) is a mental health condition characterized by unwanted, intrusive thoughts and repetitive behaviors."
      >
        <div className="glass-card p-6 md:p-8">
          <p className="mb-4">
            OCD is a neuropsychiatric disorder that affects approximately 2-3% of the global population. It's characterized by the presence of obsessions (recurrent, persistent, and intrusive thoughts, urges, or images) and compulsions (repetitive behaviors or mental acts that a person feels driven to perform).
          </p>
          <p className="mb-4">
            These obsessions and compulsions are time-consuming and cause significant distress or impairment in social, occupational, or other important areas of functioning.
          </p>
          <p>
            The condition is often chronic, with symptoms typically emerging during childhood, adolescence, or early adulthood. While the exact cause of OCD is not fully understood, research suggests that genetic, neurological, behavioral, cognitive, and environmental factors may contribute to its development.
          </p>
        </div>
      </InfoSection>
      
      <InfoSection
        id="characteristics"
        title="Characteristics of OCD"
        icon={<ListChecks className="w-5 h-5" />}
        inverse={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">Obsessions</h3>
            <p className="text-gray-700">
              Persistent, unwanted thoughts, images, or urges that cause anxiety or distress. Common obsessions include fears of contamination, need for symmetry, intrusive violent or sexual thoughts, and excessive concern with religious or moral issues.
            </p>
          </div>
          
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">Compulsions</h3>
            <p className="text-gray-700">
              Repetitive behaviors or mental acts that a person feels driven to perform in response to an obsession. Common compulsions include excessive cleaning, checking, ordering, counting, repeating, and seeking reassurance.
            </p>
          </div>
          
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">Insight and Awareness</h3>
            <p className="text-gray-700">
              Most individuals with OCD recognize that their obsessions and compulsions are excessive or unreasonable (good insight), though this can vary (fair insight, poor insight, or absent insight/delusional beliefs).
            </p>
          </div>
          
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">Time-Consuming</h3>
            <p className="text-gray-700">
              Obsessions and compulsions are time-consuming, taking more than one hour per day, and cause significant distress or impairment in functioning.
            </p>
          </div>
        </div>
      </InfoSection>
      
      <InfoSection
        id="symptoms"
        title="Symptoms"
        icon={<List className="w-5 h-5" />}
        description="Symptoms of OCD can manifest in various ways and can change over time."
      >
        <div className="glass-card p-6 md:p-8">
          <h3 className="text-xl font-alegreya font-black mb-4">Common Obsessive Symptoms:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Fear of contamination or dirt</li>
            <li>Need for symmetry, order, and precision</li>
            <li>Intrusive thoughts about harm coming to oneself or others</li>
            <li>Unwanted aggressive or taboo thoughts</li>
            <li>Excessive doubt and need for reassurance</li>
          </ul>
          
          <h3 className="text-xl font-alegreya font-black mb-4">Common Compulsive Symptoms:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Excessive cleaning and hand washing</li>
            <li>Checking behaviors (e.g., checking that the door is locked)</li>
            <li>Counting, tapping, repeating certain words</li>
            <li>Arranging items to face a certain way</li>
            <li>Mental compulsions like praying or mentally reviewing events</li>
          </ul>
          
          <h3 className="text-xl font-alegreya font-black mb-4">Associated Symptoms:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Avoidance of situations that trigger obsessions</li>
            <li>Reassurance seeking</li>
            <li>Excessive slowness in completing routine activities</li>
            <li>Difficulty making decisions</li>
            <li>Strong need for control</li>
          </ul>
        </div>
      </InfoSection>
      
      <InfoSection
        id="diagnosis"
        title="Diagnosis"
        icon={<Search className="w-5 h-5" />}
        inverse={true}
      >
        <div className="glass-card p-6 md:p-8">
          <p className="mb-4">
            Diagnosis of OCD is primarily clinical, based on a comprehensive psychiatric evaluation that includes a detailed history of symptoms and their impact on functioning.
          </p>
          
          <h3 className="text-xl font-alegreya font-black mb-3">Diagnostic Criteria (DSM-5):</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Presence of obsessions, compulsions, or both</li>
            <li>The obsessions or compulsions are time-consuming or cause significant distress or impairment</li>
            <li>The symptoms are not attributable to the physiological effects of a substance or another medical condition</li>
            <li>The disturbance is not better explained by another mental disorder</li>
          </ul>
          
          <h3 className="text-xl font-alegreya font-black mb-3">Assessment Tools:</h3>
          <p className="mb-4">
            Several validated assessment tools can help in the diagnosis and severity assessment of OCD, including:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Yale-Brown Obsessive Compulsive Scale (Y-BOCS)</li>
            <li>Obsessive-Compulsive Inventory-Revised (OCI-R)</li>
            <li>Florida Obsessive-Compulsive Inventory (FOCI)</li>
          </ul>
          
          <h3 className="text-xl font-alegreya font-black mb-3">Medical Tests:</h3>
          <p>
            There are no specific laboratory tests for diagnosing OCD. However, medical tests may be ordered to rule out other conditions that might be causing or contributing to the symptoms, especially when the presentation is atypical or there are neurological symptoms. These may include blood tests, neuroimaging (MRI, CT scan), or electroencephalography (EEG) in some cases.
          </p>
        </div>
      </InfoSection>
      
      <InfoSection
        id="prognosis"
        title="Prognosis"
        icon={<MessageCircleQuestion className="w-5 h-5" />}
      >
        <div className="glass-card p-6 md:p-8">
          <p className="mb-4">
            The prognosis for OCD varies widely among individuals, but with appropriate treatment, many people can experience significant symptom reduction and improved quality of life.
          </p>
          
          <h3 className="text-xl font-alegreya font-black mb-3">Treatment Response:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>About 60-80% of patients show improvement with appropriate treatment</li>
            <li>Cognitive-Behavioral Therapy (CBT), particularly Exposure and Response Prevention (ERP), is effective for many individuals</li>
            <li>Medication (typically SSRIs) can provide significant relief for many patients</li>
            <li>Combined treatment approach (medication and therapy) often yields the best results</li>
          </ul>
          
          <h3 className="text-xl font-alegreya font-black mb-3">Course of Illness:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>OCD is typically a chronic condition with waxing and waning symptoms</li>
            <li>Complete remission occurs in approximately 10-20% of cases</li>
            <li>Symptoms may fluctuate in response to stress and life events</li>
            <li>Early intervention generally leads to better outcomes</li>
            <li>Continued treatment may be necessary to maintain improvements</li>
          </ul>
          
          <h3 className="text-xl font-alegreya font-black mb-3">Factors Affecting Prognosis:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Severity and duration of symptoms before treatment</li>
            <li>Presence of comorbid conditions</li>
            <li>Family support and social functioning</li>
            <li>Treatment adherence</li>
            <li>Insight into the irrational nature of obsessions</li>
          </ul>
        </div>
      </InfoSection>
      
      <InfoSection
        id="complications"
        title="Complications"
        icon={<AlertTriangle className="w-5 h-5" />}
        inverse={true}
      >
        <div className="glass-card p-6 md:p-8">
          <p className="mb-6">
            If left untreated or inadequately treated, OCD can lead to various complications that affect multiple aspects of a person's life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-alegreya font-black mb-3">Functional Impairment:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Difficulties maintaining employment</li>
                <li>Academic underachievement</li>
                <li>Reduced productivity</li>
                <li>Financial problems</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-alegreya font-black mb-3">Social Consequences:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Strained relationships</li>
                <li>Social isolation</li>
                <li>Difficulty forming and maintaining relationships</li>
                <li>Family conflict and distress</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-alegreya font-black mb-3">Physical Health Issues:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Skin problems from excessive washing</li>
                <li>Sleep disturbances</li>
                <li>Poor nutrition or eating problems</li>
                <li>Medical issues from avoiding healthcare due to contamination fears</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-alegreya font-black mb-3">Psychological Impact:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Increased risk of depression</li>
                <li>Heightened anxiety</li>
                <li>Reduced self-esteem</li>
                <li>Increased risk of suicidal thoughts</li>
              </ul>
            </div>
          </div>
        </div>
      </InfoSection>
      
      <InfoSection
        id="comorbidities"
        title="Main Comorbidities"
        icon={<Shuffle className="w-5 h-5" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">1. Depression</h3>
            <p className="text-gray-700">
              One of the most common comorbidities, with up to 50-60% of OCD patients experiencing major depressive disorder at some point.
            </p>
          </div>
          
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">2. Anxiety Disorders</h3>
            <p className="text-gray-700">
              Including generalized anxiety disorder, social anxiety disorder, specific phobias, and panic disorder. OCD often co-occurs with one or more anxiety disorders.
            </p>
          </div>
          
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">3. Tic Disorders</h3>
            <p className="text-gray-700">
              Including Tourette Syndrome and other tic disorders. This comorbidity is particularly common in childhood-onset OCD.
            </p>
          </div>
          
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">4. ADHD</h3>
            <p className="text-gray-700">
              Attention-Deficit/Hyperactivity Disorder may co-occur with OCD, especially in children and adolescents.
            </p>
          </div>
          
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">5. Body Dysmorphic Disorder</h3>
            <p className="text-gray-700">
              Characterized by preoccupation with perceived defects in physical appearance, this disorder shares many features with OCD and is part of the same spectrum.
            </p>
          </div>
          
          <div className="glass-card p-6 card-hover">
            <h3 className="text-xl font-alegreya font-black mb-3">Other Common Comorbidities</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Eating disorders</li>
              <li>Substance use disorders</li>
              <li>Personality disorders</li>
              <li>Autism spectrum disorder</li>
            </ul>
          </div>
        </div>
      </InfoSection>
      
      <InfoSection
        id="spectrum"
        title="OCD Spectrum"
        icon={<Layers className="w-5 h-5" />}
        inverse={true}
      >
        <div className="glass-card p-6 md:p-8">
          <p className="mb-6">
            In the DSM-5, OCD is classified under the Obsessive-Compulsive and Related Disorders spectrum, which includes a group of disorders that share similarities in phenomenology, comorbidity, family history, and neurobiological mechanisms.
          </p>
          
          <h3 className="text-xl font-alegreya font-black mb-4">The OCD Spectrum Includes:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Obsessive-Compulsive Disorder (OCD)</strong>: Characterized by obsessions and compulsions.</li>
            <li><strong>Body Dysmorphic Disorder</strong>: Preoccupation with perceived defects in physical appearance.</li>
            <li><strong>Hoarding Disorder</strong>: Persistent difficulty discarding possessions regardless of their actual value.</li>
            <li><strong>Trichotillomania (Hair-Pulling Disorder)</strong>: Recurrent pulling out of one's hair.</li>
            <li><strong>Excoriation (Skin-Picking) Disorder</strong>: Recurrent skin picking resulting in skin lesions.</li>
            <li><strong>Substance/Medication-Induced Obsessive-Compulsive and Related Disorder</strong>: Symptoms induced by substances or medications.</li>
            <li><strong>Obsessive-Compulsive and Related Disorder Due to Another Medical Condition</strong>: Symptoms caused by the direct physiological effects of a medical condition.</li>
            <li><strong>Other Specified and Unspecified Obsessive-Compulsive and Related Disorders</strong>: Includes conditions like body-focused repetitive behavior disorder and obsessional jealousy.</li>
          </ul>
          
          <p>
            These disorders share features such as repetitive thoughts, behaviors, or urges, but differ in the focus of the obsessions and compulsions. Understanding OCD as part of a spectrum has implications for diagnosis, treatment planning, and research.
          </p>
        </div>
      </InfoSection>
      
      <InfoSection
        id="ocd-vs-autism"
        title="OCD vs. Autism"
        icon={<GitCompare className="w-5 h-5" />}
      >
        <div className="glass-card p-6 md:p-8">
          <p className="mb-6">
            While OCD and Autism Spectrum Disorder (ASD) can sometimes share certain behavioral features, they are distinct conditions with different underlying causes, presentations, and treatment approaches. However, they can co-occur, making diagnosis complex.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-alegreya font-black mb-3">Similarities:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Both may involve repetitive behaviors</li>
                <li>Both may include rigid routines or rituals</li>
                <li>Both may feature intense focus on specific interests or activities</li>
                <li>Both can impact social functioning</li>
                <li>Both may involve sensory sensitivities</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-alegreya font-black mb-3">Key Differences:</h3>
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2 px-4">Feature</th>
                    <th className="text-left py-2 px-4">OCD</th>
                    <th className="text-left py-2 px-4">Autism</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-medium">Nature of repetitive behaviors</td>
                    <td className="py-2 px-4">Aimed at reducing anxiety or preventing harm</td>
                    <td className="py-2 px-4">Often about self-regulation or pleasure</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-medium">Insight</td>
                    <td className="py-2 px-4">Usually recognize behaviors as excessive</td>
                    <td className="py-2 px-4">May not see behaviors as unusual</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-medium">Social difficulties</td>
                    <td className="py-2 px-4">Result from symptoms interfering</td>
                    <td className="py-2 px-4">Core feature of the condition</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 px-4 font-medium">Communication</td>
                    <td className="py-2 px-4">Typically unaffected</td>
                    <td className="py-2 px-4">Often affected (verbal and non-verbal)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium">Distress about behaviors</td>
                    <td className="py-2 px-4">Usually causes distress</td>
                    <td className="py-2 px-4">May not cause distress</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <h3 className="text-xl font-alegreya font-black mb-3">Differentiating OCD from Autism:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/90 p-5 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="text-lg font-alegreya font-black mb-2">Assessment Focus for OCD:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Presence of intrusive, unwanted thoughts</li>
                <li>Behaviors performed to reduce anxiety</li>
                <li>Awareness that thoughts/behaviors are excessive</li>
                <li>Distress caused by symptoms</li>
                <li>Content of obsessions (typically about harm, contamination, etc.)</li>
              </ul>
            </div>
            
            <div className="bg-white/90 p-5 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="text-lg font-alegreya font-black mb-2">Assessment Focus for Autism:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Social communication difficulties</li>
                <li>Restricted interests and repetitive behaviors</li>
                <li>Sensory sensitivities</li>
                <li>Developmental history</li>
                <li>Function of repetitive behaviors (self-soothing, pleasure)</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-alegreya font-black mb-3">When Both Conditions Co-occur:</h3>
            <p className="mb-4">
              Approximately 17-37% of individuals with ASD also have OCD. When both conditions co-occur:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Treatment requires addressing both conditions</li>
              <li>Modifications to standard OCD treatments may be necessary</li>
              <li>Visual supports and concrete language may improve therapy effectiveness</li>
              <li>Higher levels of family involvement may be beneficial</li>
              <li>Medication management may need to address symptoms of both conditions</li>
            </ul>
          </div>
        </div>
      </InfoSection>
      
      <InfoSection
        id="support"
        title="Support and Resources"
        icon={<HelpCircle className="w-5 h-5" />}
        inverse={true}
      >
        <div className="glass-card p-6 md:p-8">
          <p className="mb-6">
            If you or someone you know is experiencing symptoms of OCD, it's important to seek professional help. Here are some resources that may be helpful:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-alegreya font-black mb-3">Professional Support:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mental health professionals (psychiatrists, psychologists, therapists)</li>
                <li>Primary care physicians can provide referrals</li>
                <li>OCD specialists who provide evidence-based treatments</li>
                <li>Intensive outpatient programs for severe OCD</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-alegreya font-black mb-3">Organizations:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>International OCD Foundation (IOCDF)</li>
                <li>OCD-UK</li>
                <li>National Alliance on Mental Illness (NAMI)</li>
                <li>Anxiety and Depression Association of America (ADAA)</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-alegreya font-black mb-3">Self-Help Strategies:</h3>
            <p className="mb-4">
              While professional help is essential, these strategies may complement treatment:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Learning about OCD and its treatment</li>
              <li>Practicing mindfulness and stress reduction techniques</li>
              <li>Joining support groups (in-person or online)</li>
              <li>Following treatment recommendations consistently</li>
              <li>Involving family in understanding and supporting recovery</li>
            </ul>
          </div>
        </div>
      </InfoSection>
      
      <InfoSection
        id="personal-stories"
        title="Living with OCD"
        icon={<User className="w-5 h-5" />}
      >
        <div className="glass-card p-6 md:p-8">
          <p className="mb-6">
            Understanding the lived experience of OCD can help reduce stigma and provide hope for recovery. While everyone's experience is unique, many individuals with OCD can lead fulfilling lives with proper treatment and support.
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-alegreya font-black mb-3">Common Experiences:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>OCD symptoms often wax and wane over time</li>
              <li>Learning to manage OCD is often a lifelong journey</li>
              <li>Treatment can significantly reduce symptom severity and improve quality of life</li>
              <li>Many people with OCD develop effective coping strategies</li>
              <li>Support from understanding family, friends, and professionals is crucial</li>
            </ul>
          </div>
          
          <p className="italic text-gray-600 border-l-4 border-primary pl-4 py-2">
            "Recovery isn't about eliminating anxiety completely, but about learning to face it without letting it control your life. With the right treatment and support, OCD doesn't have to define who you are or limit what you can achieve."
          </p>
        </div>
      </InfoSection>
      
      <Footer />
    </div>
  );
};

export default Index;
