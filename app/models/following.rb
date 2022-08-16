class Following < ApplicationRecord

    belongs_to :approver, class_name: "User"
    belongs_to :requester, class_name: "User"
    
end
