import { ThemeModal } from '@/component/modal';
import RootLayout from './layout';
import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <RootLayout setShowModal={setShowModal}>
      <div className="chat-notification-logo-wrapper">
        <p>Nội dung</p>
        {showModal && <ThemeModal isVisible={showModal} onClose={() => setShowModal(false)} />}
      </div>
    </RootLayout>
  );
}
