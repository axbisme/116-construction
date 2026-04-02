import { HiOutlineChatBubbleBottomCenterText, HiOutlineClipboardDocumentCheck, HiOutlineHomeModern, HiOutlineMapPin } from 'react-icons/hi2';
import Container from '@/components/Container';

const trustItems = [
  {
    label: 'Owner-led experience',
    description: 'A smaller, more personal feel from first call to final walkthrough.',
    icon: HiOutlineHomeModern,
  },
  {
    label: 'Clear planning',
    description: 'Set expectations around scope, selections, and the next steps early.',
    icon: HiOutlineClipboardDocumentCheck,
  },
  {
    label: 'Reliable communication',
    description: 'Updates that help homeowners feel informed instead of guessing.',
    icon: HiOutlineChatBubbleBottomCenterText,
  },
  {
    label: 'Regional fit',
    description: 'Design direction shaped for South Georgia and Lowcountry homes.',
    icon: HiOutlineMapPin,
  },
];

const TrustBar = () => (
  <section className="border-y border-border bg-white/70 backdrop-blur-sm">
    <Container>
      <div className="grid gap-4 py-8 md:grid-cols-2 xl:grid-cols-4">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="rounded-[1.5rem] border border-border/70 bg-white px-5 py-5 shadow-[0_18px_44px_-34px_rgba(36,29,24,0.35)]">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-soft p-3 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-lg font-semibold text-foreground">{item.label}</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
            </div>
          );
        })}
      </div>
    </Container>
  </section>
);

export default TrustBar;
