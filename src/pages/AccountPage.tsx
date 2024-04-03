import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { User } from "firebase/auth";

interface UserProfile {
  email: string;
  phoneNumber?: string;
  orderHistory?: Array<any>;
}

const AccountPage: React.FC = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchUserProfile = async (uid: string) => {
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setUserProfile(userSnap.data() as UserProfile);
      } else {
        console.error("User does not exist");
      }
    };

    const currentUser: User | null = auth.currentUser;
    if (currentUser) {
      fetchUserProfile(currentUser.uid);
    } else {
      navigate("/login"); // redirect to if not authenticated
    }
  }, [auth, db, navigate]);

  if (!userProfile) {
    return <div>Loading...</div>; // loading state
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Accout Details</h1>
      <p>Email: {userProfile.email}</p>
      <p>Phone Number: {userProfile.phoneNumber}</p>
      {/* render other info here as needed */}
    </div>
  );
};

export default AccountPage;
