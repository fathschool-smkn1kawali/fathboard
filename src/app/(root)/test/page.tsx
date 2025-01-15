'use client';

import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/react";

export default function Page() {
  const mainModal = useDisclosure();
  const detailModal = useDisclosure();

  return (
    <>
      <Button onPress={mainModal.onOpen}>Open Main Modal</Button>
      <Modal isOpen={mainModal.isOpen} onOpenChange={mainModal.onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Main Modal</ModalHeader>
              <ModalBody>
                <p>Siswa yang hadir: 10</p>
                <Button onPress={detailModal.onOpen}>Open Detail Modal</Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Nested Modal */}
      <Modal isOpen={detailModal.isOpen} onOpenChange={detailModal.onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Detail Modal</ModalHeader>
              <ModalBody>
                <p>Ini adalah modal untuk detail siswa yang hadir.</p>
                <Button onPress={detailModal.onClose}>Close</Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
