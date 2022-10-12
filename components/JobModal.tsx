import { Button, Input, Modal, ScrollView, Select, Text } from "native-base";
import React, { useContext, useState } from "react";
import ColorContext from "../Context/ColorContext";
import Colors from "../interface/color";
import Job from "../interface/job";


type Props = {
  open: boolean;
  addJob: (values:Job) => void;
  closeModal: () => void;
};

const JobModal = ({ open, addJob, closeModal }: Props): JSX.Element => {
  const [values, setValues] = useState<Job>({status:"applied"} as Job);

  const [status, setStatus] = useState("applied");
  const colors = useContext(ColorContext);
  const handleChange = (itemValue: string) => {
    setStatus(itemValue);
    setValues((values) => {
      return {...values,status:itemValue}
    });
  };

  const handleChanges = (name: string) => (text:string) => {
    setValues({ ...values, [name]: text });
  };

  const handleAddJob = () => {
    console.log(values)
    addJob(values)
  }

 

  return (
    <Modal isOpen={open} size={"full"} height={"100%"} onClose={closeModal}>
      <Modal.Content
        height={"100%"}
        marginBottom={0}
        marginTop={"auto"}
        backgroundColor={"dark.50"}
      >
        <Modal.CloseButton />
        <Modal.Header backgroundColor={"dark.50"} color={"#fff"}>
          <Text color={"#fff"} fontSize="2xl" fontWeight={"700"}>
            Add Job
          </Text>
        </Modal.Header>
        <Modal.Body>
          <ScrollView>
            <Input
              placeholder="Company"
              size={"2xl"}
              color={"#fff"}
              marginBottom={4}
              onChangeText={handleChanges("name")}
            />
            <Input
              placeholder="Position"
              size={"2xl"}
              color={"#fff"}
              marginBottom={4}
              onChangeText={handleChanges("title")}
            />
            <Select
              marginBottom={4}
              size={"2xl"}
              selectedValue={status}
              color={colors[status as keyof Colors]}
              placeholder="Status"
              borderColor={colors[status as keyof Colors]}
              borderWidth={3}
              onValueChange={handleChange}
            >
              <Select.Item label="Applied" value="applied" />
              <Select.Item label="Offer" value="offer" />
              <Select.Item label="Rejected" value="rejected" />
              <Select.Item label="OnSite" value="onsite" />
              <Select.Item label="Interview" value="interview" />
              <Select.Item label="Phone Interview" value="phone" />
            </Select>
            <Input
              placeholder="Date Added"
              size={"2xl"}
              color={"#fff"}
              marginBottom={4}
            />
          </ScrollView>

          <Button size={"lg"} marginBottom={4} onPress={handleAddJob}>
            Add Job
          </Button>
          <Button size={"lg"} marginBottom={4} onPress={closeModal}>
            Cancel
          </Button>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default JobModal;
