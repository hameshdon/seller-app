import React, { useState } from "react";

import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";

import { ProfileStyles } from "./css/profile";
export default function Registration() {
    const initialstate = {
        firstname: "",
        lastname: "",
       
        phonenumber: "",
        location: "",
        email: "",

       

       

    };
    const errmsg = {
        firstNameErr: "",
        lastNameErr: "",
       
        phonenumberErr: "",
        locationErr: "",
        emailErr: "",


       
       
    };
   
    const [form, setForm] = useState(initialstate);
    const [error, setError] = useState(errmsg);

    console.log("yes", form);
    const emailverify =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

    function FirstnameValidate(value: string) {
        if (form.firstname === "") {
            setError({ ...error, firstNameErr: "*This field can not be empty" });
        } else {
            setError({ ...error, firstNameErr: "" });
        }
    }
    function LastnameValidate(value: string) {
        if (form.lastname === "") {
            setError({ ...error, lastNameErr: "*This field can not be empty" });
        } else {
            setError({ ...error, lastNameErr: "" });
        }
    }
  
    function PhonenumberValidate(value: string) {
        if (form.phonenumber === "") {
            setError({ ...error, phonenumberErr: "*This field can not be empty" });
        } else if (!!!form.phonenumber.match("[0-9]{10}")) {
            setError({
                ...error,
                phonenumberErr: "Please provide valid phone number",
            });
        } else {
            setError({ ...error, phonenumberErr: "" });
        }
    }
    function locationValidate(value: string) {
        if (form.location === "") {
            setError({ ...error, locationErr: "*This field can not be empty" });
        } else {
            setError({ ...error, locationErr: "" });
        }
    }

    function EmailValidate(value: string) {
        if (form.email === "") {
            setError({ ...error, emailErr: "*This field can not be empty" });
        } else if (!!!emailverify.test(form.email)) {
            setError({ ...error, emailErr: "Invalid Email" });
        } else {
            setError({ ...error, emailErr: "" });
        }
    }

    return (
        <View style={ProfileStyles.content}>
          
              
                
           
            <View style={ProfileStyles.headContainer} >
                <View >
                    <Text style={ProfileStyles.headText}>First Name</Text>
                </View>
                <TextInput
                    onChangeText={(value) => setForm({ ...form, firstname: value })}
                    style={[ProfileStyles.inputBox]}
                    placeholder="First name"
                    onBlur={() => FirstnameValidate(form.firstname)}
                    value={form.firstname}
                />
                <Text>
                    <Text
                        style={{ color: "red", marginLeft: 6, marginBottom: 0, fontSize: 13 }} >
                        {error.firstNameErr}
                    </Text>
                </Text>
            </View>
             <View style={ProfileStyles.headContainer} >

                <View >
                    <Text style={ProfileStyles.headText}>Last Name</Text>
                </View>
                <TextInput
                    onChangeText={(value) => setForm({ ...form, lastname: value })}
                    style={[ProfileStyles.inputBox]}
                    onBlur={() => LastnameValidate(form.lastname)}
                    placeholder="Last name"
                    value={form.lastname}
                />
                <Text>
                    <Text
                        style={{ color: "red", marginLeft: 6, marginBottom: 0, fontSize: 13 }}
                    >
                        {error.lastNameErr}
                    </Text>
                </Text>
            </View>
            <View style={ProfileStyles.headContainer} >
                <View >
                    <Text style={ProfileStyles.headText}>Email</Text>
                </View>
                <TextInput
                    onChangeText={(value) => setForm({ ...form, email: value })}
                    style={[ProfileStyles.inputBox]}
                    placeholder="Email"
                    onBlur={() => EmailValidate(form.email)}
                    value={form.email}
                />
                <Text>
                    <Text
                        style={{ color: "red", marginLeft: 6, marginBottom: 0, fontSize: 13 }}>
                        {error.emailErr}
                    </Text>
              </Text>
            </View>

            <View style={ProfileStyles.headContainer} >
                <View >
                    <Text style={ProfileStyles.headText}>Phone number</Text>
                </View>
                <TextInput
                    onChangeText={(value) => setForm({ ...form, phonenumber: value })}
                    style={[ProfileStyles.inputBox]}
                    placeholder="Phone Number"
                    onBlur={() => PhonenumberValidate(form.phonenumber)}
                    value={form.phonenumber}
                    maxLength={10}
                    keyboardType="number-pad"
                />
                <Text>
                    <Text
                        style={{ color: "red", marginLeft: 6, marginBottom: 0, fontSize: 13 }}>
                        {error.phonenumberErr}
                    </Text>
                </Text>
            </View>

           <View style={ProfileStyles.headContainer} >
                <View >
                    <Text style={ProfileStyles.headText}>Location</Text>
                </View>
                <TextInput
                    onChangeText={(value) => setForm({ ...form, location: value })}
                    style={[ProfileStyles.inputBox]}
                    placeholder="Location"
                    onBlur={() => locationValidate(form.location)}
                    value={form.location}
                />
                <Text>
                    <Text
                        style={{ color: "red", marginLeft: 6, marginBottom: 0, fontSize: 13 }}>
                        {error.locationErr}
                    </Text>
                </Text>
            </View> 

            <TouchableOpacity style={[ProfileStyles.greenButton]}>
               <Text>
                  <Text style={[ProfileStyles.whiteText]}>Next:Confirmation</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",

        justifyContent: "center",
    },
});
