import { Class } from "@/lib/types";
import { ModalContent, Modal, ModalHeader, ModalBody, Card, CardBody, CardHeader, Chip, Divider} from "@nextui-org/react";

interface ClassModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  gradeData: Class;
}

export const ClassDetailModal = ({ gradeData, isOpen, onOpenChange}: ClassModalProps) => {

    // Filter dan sort data
  const sortedClassData = gradeData?.data?.sort((a, b) => {
      if (a.status === "Active" && b.status === "Empty") return -1;
      if (a.status === "Empty" && b.status === "Active") return 1;
     
      return 0;
    });

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside" size="xl">
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex gap-2 items-center">
              <h5>Detail Per Kelas {gradeData?.name ?? '-'}</h5>
            </ModalHeader>
            <ModalBody className="p-4">

              {/* Individual Class Cards */}
              <div className="space-y-4">
                {sortedClassData?.map((classInfo) => (
                  <Card isPressable fullWidth key={classInfo?.id} className="border p-2.5 hover:scale-95 transition duration-300">
                    <CardHeader className="flex items-center gap-4">
                      <h4 className="text-lg font-semibold">{classInfo?.name}</h4>
                      <Chip className="text-sm" size="sm" color={classInfo?.status === 'Active' ? 'primary' : 'danger'}>{classInfo?.status}</Chip>
                    </CardHeader>
                    <CardBody>
                      <ul className="list-disc list-inside">
                        <li className="font-semibold">Kehadiran: <span className="text-success">{classInfo?.total_student_present ?? 0} Siswa</span></li>
                        <li className="font-semibold">Tidak Hadir: <span className="text-danger">{classInfo?.total_student_absent ?? 0} Siswa</span></li>
                        <li className="font-semibold">Izin: <span className="text-warning">{classInfo?.total_student_leave ?? 0} Siswa</span></li>
                      </ul>

                      {classInfo?.status === 'Active' && (
                        <>
                          <Divider className="my-4" />
                          <div>
                            <p className="line-clamp-2 font-semibold">Guru: {classInfo?.teacher ?? '-'}</p>
                            <p className="font-semibold line-clamp-2">Mata Pelajaran: {classInfo?.lesson ?? '-'}</p>
                          </div>
                        </>
                      )}
                    </CardBody>
                  </Card>
                )) ?? <p>Tidak ada data ditemukan</p>}
              </div>

            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
